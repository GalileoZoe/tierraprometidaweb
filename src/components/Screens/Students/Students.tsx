import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useStudentsApi } from "../../../hooks/useStudentsApi";
import { PDFDocument } from "../../Components/PDFDocument";
import { Student } from "../../../interfaces/Students";
import {
  FaBeer,
  FaCannabis,
  FaFilePdf,
  FaFlask,
  FaFolder,
  FaPen,
  FaSyringe,
  FaTrash,
} from "react-icons/fa";
import { StudentsForm } from "./StudentsForm";

export const Students: React.FC = () => {
  const { isLoading, listStudents, deleteStudent } = useStudentsApi();
  const [editingStudent, setEditingStudent] = useState<Student | null>(null); // Estado local para el estudiante que se va a editar

  // Función para manejar la eliminación de un estudiante
  const handleDelete = (student: Student) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este estudiante?"
    );
    if (confirmDelete) {
      deleteStudent(student); // Pasar el objeto Student completo
    }
  };

  // Función para manejar la edición de un estudiante
  const handleEdit = (student: Student) => {
    setEditingStudent(student); // Establecer el estudiante a editar
  };

  // Función para manejar el cierre del formulario de edición
  const handleCloseForm = () => {
    setEditingStudent(null); // Limpiar el estudiante en edición
  };

  if (editingStudent) {
    return (
      <StudentsForm
        student={editingStudent}
        onClose={handleCloseForm} // Pasar función para cerrar el formulario
      />
    );
  }

  const drugIcons = {
    Cannabis: <FaCannabis className="icon" />,
    Alcohol: <FaBeer className="icon" />,
    Metanfetamina: <FaFlask className="icon" />,
    Heroina: <FaSyringe className="icon" />,
    // Agrega más mapeos según sea necesario
  };

  return (
    <div>
      <h1 className="title">Usuarios</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            border: "1px solid #ddd",
          }}
        >
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr
                style={{
                  textAlign: "center",
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#f9f9f9",
                  zIndex: 1,
                }}
              >
                <th>PDF</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Usuario</th>
                <th>Edad (Años)</th>
                <th>Tutor</th>
                <th>Correo</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Sustancia de Impacto</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th>Ingreso</th>
                <th>Egreso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listStudents.length > 0 ? (
                listStudents.map((student: Student) => (
                  <tr
                    key={student._id}
                    style={{ textAlign: "center", zIndex: 1, fontSize: "15px" }}
                  >
                    <td>
                      <PDFDownloadLink
                        document={<PDFDocument student={student} />}
                        fileName={`${student.name}_${student.lastname}.pdf`}
                      >
                        <FaFilePdf className="icon" />
                      </PDFDownloadLink>
                    </td>
                    <td>{student.name}</td>
                    <td>{student.lastname}</td>
                    <td>{student.username}</td>
                    <td>{student.age}</td>
                    <td>{student.tutor}</td>
                    <td>{student.email}</td>
                    <td>{student.address}</td>
                    <td>{student.phone}</td>
                    {drugIcons[student.drug as keyof typeof drugIcons] || (
                      <FaBeer className="icon" />
                    )}
                    <td>{student.description}</td>
                    <td>{student.status}</td>
                    <td>{student.startdate}</td>
                    <td>{student.enddate}</td>
                    <td>
                      <FaFolder />
                      <FaPen
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => handleEdit(student)} // Llama a la función handleEdit
                      />
                      <FaTrash
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleDelete(student)} // Pasar el objeto Student
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={13}>No hay estudiantes disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

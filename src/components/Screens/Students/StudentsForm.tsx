import React, { useEffect, useState } from "react";
import { Student } from "../../../interfaces/Students"; // Asegúrate de importar la interfaz Student
import { useStudentsApi } from "../../../hooks/useStudentsApi";
import { FaBeer, FaCannabis, FaFlask, FaSyringe } from "react-icons/fa";

interface StudentsFormProps {
  student: Student; // El estudiante a editar
  onClose: () => void; // Función para cerrar el formulario
}

export const StudentsForm: React.FC<StudentsFormProps> = ({
  student,
  onClose,
}) => {
  const { updateStudent } = useStudentsApi(); // Hook para manejar la API
  const [formData, setFormData] = useState<Student>(student); // Estado local para manejar los datos del formulario

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Manejar selección de droga
  const handleSelectDrug = (drug: string) => {
    setFormData((prevState) => ({
      ...prevState,
      drug,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateStudent(formData); // Llamar a la función para actualizar el estudiante
    onClose(); // Cerrar el formulario
  };

  // Sincronizar el estado del formulario con el estudiante inicial
  useEffect(() => {
    setFormData(student);
  }, [student]);

  return (
    <div className="form">
      <h2>Editar Estudiante</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellidos:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            className="input"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contacto:</label>
          <input
            type="text"
            name="phone"
            className="input"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sustancia de Impacto:</label>
          <div className="drug-select">
            <FaCannabis
              className="iconwhite"
              onClick={() => handleSelectDrug("Cannabis")}
            />
            <FaBeer
              className="iconwhite"
              onClick={() => handleSelectDrug("Alcohol")}
            />
            <FaFlask
              className="iconwhite"
              onClick={() => handleSelectDrug("Metanfetamina")}
            />
            <FaSyringe
              className="iconwhite"
              onClick={() => handleSelectDrug("Heroina")}
            />
          </div>
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            className="input"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estado:</label>
          <select name="status" className="input" onChange={handleChange}>
            <option value={formData.status}>{formData.status}</option>
            <option value="Baja">Baja</option>
            <option value="En Proceso">En Proceso</option>
            <option value="Rehabilitado">Rehabilitado</option>
          </select>
        </div>
        <div>
          <label>Fecha de Llegada:</label>
          <input
            type="date"
            name="startdate"
            className="input"
            value={formData.startdate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de Salida:</label>
          <input
            type="date"
            name="enddate"
            className="input"
            value={formData.enddate}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar Cambios</button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

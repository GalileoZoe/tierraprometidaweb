import { useEffect, useState } from "react";
import { Student } from "../interfaces/Students"; // Asegúrate de importar tu interfaz Student

export const useStudentsApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [listStudents, setListStudents] = useState<Student[]>([]);
  const apiUrl: string =
    "https://tierraprometida-production.up.railway.app/api/tierraprometida/v1/students";

  // Cargar estudiantes desde la API
  const loadStudents = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data: Student[] = await response.json();
      setListStudents(data);
    } catch (error) {
      console.error("Error loading students:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para manejar errores
  const handleError = async (response: Response) => {
    const errorData = await response.json();
    throw new Error(errorData.message || `Error: ${response.status}`);
  };

  // Crear un nuevo estudiante en la API
  const createStudent = async (data: Student) => {
    const dataBody: Student = {
      name: data.name,
      lastname: data.lastname,
      username: data.username,
      age: data.age,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      file: data.file,
      files: data.files,
      description: data.description,
      startdate: data.startdate,
      enddate: data.enddate,
      status: data.status,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataBody),
      });

      if (!response.ok) {
        await handleError(response);
      }

      loadStudents(); // Recargar la lista después de crear
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  // Actualizar un estudiante existente en la API
  const updateStudent = async (data: Student) => {
    const dataBody: Student = {
      name: data.name,
      lastname: data.lastname,
      username: data.username,
      age: data.age,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      drug: data.drug,
      tutor: data.tutor,
      file: data.file,
      files: data.files,
      description: data.description,
      startdate: data.startdate,
      enddate: data.enddate,
      status: data.status,
    };

    try {
      const response = await fetch(`${apiUrl}/${data._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataBody),
      });

      if (!response.ok) {
        await handleError(response);
      }

      loadStudents(); // Recargar la lista después de actualizar
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  // Eliminar un estudiante en la API
  const deleteStudent = async (data: Student) => {
    try {
      const response = await fetch(`${apiUrl}/${data._id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        await handleError(response);
      }

      loadStudents(); // Recargar la lista después de eliminar
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Cargar la lista de estudiantes al montar el componente
  useEffect(() => {
    loadStudents();
  }, []);

  return {
    isLoading,
    listStudents,
    loadStudents,
    createStudent,
    updateStudent,
    deleteStudent,
  };
};

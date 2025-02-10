import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import ResumeTest from "./Pages/Resume.test";
import ContactoTest from './Pages/Contacto.test';

test("Muestra la data desde el JSON", () => {
  render(<ResumeTest />);
  expect(screen.getByText("PHP")).toBeInTheDocument();
  expect(screen.getByText("GIT")).toBeInTheDocument();
  expect(screen.getByText("SQL")).toBeInTheDocument();
  expect(screen.getByText("REACT JS")).toBeInTheDocument();
});

test("Llama a la función de envío de correo al hacer submit", () => {
    const mockSendEmail = jest.fn();
    render(<ContactoTest enviarCorreo={mockSendEmail} />);
  
    const form = screen.getByTestId("formulario"); // Encuentra el formulario
    fireEvent.submit(form); // Simula el envío del formulario
  
    expect(mockSendEmail).toHaveBeenCalledTimes(1); // ✅ Ahora sí debería pasar
});

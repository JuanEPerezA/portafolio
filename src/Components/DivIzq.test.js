import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DivIzq from "./DivIzq";

describe("Prueba de descarga en DivIzq", () => {
  test("El botón de descarga tiene el enlace correcto", async () => {
    const idioma = "ES"; // Cambia a "EN" para probar en inglés

    render(<DivIzq idioma={idioma} />);

    // Encuentra el enlace dentro del botón
    const downloadLink = screen.getByRole("link", { name: /descargar/i });

    // Verifica que el atributo `href` tiene el archivo correcto
    expect(downloadLink).toHaveAttribute("href", "./Assets/HV Juan Perez.pdf");

    // Simula un clic en el botón de descarga
    await userEvent.click(downloadLink);

    // Como no podemos descargar archivos en Jest, al menos verificamos que el atributo `download` esté presente
    expect(downloadLink).toHaveAttribute("download", "JuanPérez.pdf");
  });
});

test("Los enlaces tienen la URL correcta", () => {
  render(<DivIzq idioma="ES" setIdioma={() => {}} />);

  // Verificar enlace de WhatsApp
  const whatsappLink = screen.getByTestId("whatsapp-link");
  expect(whatsappLink).toHaveAttribute(
    "href",
    "https://api.whatsapp.com/send?phone=573117121720"
  );

  // Verificar enlace de correo
  const emailLink = screen.getByRole("link", { name: /@/i });
  expect(emailLink).toHaveAttribute("href", "mailto:jepa9@hotmail.com");

  // Verificar enlace de GitHub
  const githubLink = screen.getByTestId("github-link");
  expect(githubLink).toHaveAttribute("href", "https://github.com/JuanEPerezA");

  // Verificar enlace de LinkedIn
  const linkedinLink = screen.getByTestId("linkedin-link");
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/jepa1998/"
  );
});

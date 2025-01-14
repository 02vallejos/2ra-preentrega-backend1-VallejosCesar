//Convierte una URL de archivo
import { fileURLToPath } from "url";
// Devuelve el directorio donde se encuentra el archivo actual
import { dirname } from "path";

// `import.meta.url` es una propiedad que proporciona el URL del módulo actual.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

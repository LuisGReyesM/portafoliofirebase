
import { getFirestore } from 'firebase/firestore';
import app from '../../../firebaseConfig.js';  // Importa la configuración de Firebase

// Función para obtener Firestore solo cuando sea necesario
export function getDb() {
  return getFirestore(app);  
}

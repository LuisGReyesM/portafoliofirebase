import { collection, getDocs } from 'firebase/firestore';
import { getDb } from './fireStore';

export const actions = {

  async getProjects({ commit }) {
    try {
      // Imprime un mensaje antes de realizar la consulta para saber si se está ejecutando la acción
      console.log('Obteniendo proyectos...');

      const db = getDb();
     
      const projectsCollection = collection(db, 'project');   
      const projectsSnapshot = await getDocs(projectsCollection); 

    
      // Mapea los documentos para obtener los datos y asignarles un id
      const projectsList = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Imprime el listado de proyectos que se obtuvo de Firebase
      console.log('Proyectos obtenidos:', projectsList);
      
      // Commit de los proyectos al store
      commit('setProjects', projectsList);
    } catch (error) {
      // Imprime el error en caso de que ocurra uno
      console.error('Error al obtener proyectos:', error.message);
    }
  },
};

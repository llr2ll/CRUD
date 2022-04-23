import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useExemplos() {
    const exemplos = ref([])
    const exemplo = ref([])
    const router = useRouter()
    const errors = ref('')

    const getExemplos = async () => {
        let response = await axios.get('/api/exemplos')
        exemplos.value = response.data.data;
    }

    const getExemplo = async (id) => {
        let response = await axios.get('/api/exemplos/' + id)
        exemplo.value = response.data.data;
    }

    const storeExemplo = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/exemplos', data) 
            await router.push({name: 'exemplos.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateExemplo = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/exemplos/' + id, exemplo.value)
            await router.push({name: 'exemplos.index'})
        } catch (e) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const destroyExemplo = async (id) => {
        await axios.delete('/api/exemplos/' + id)
    }


    return {
        exemplos,
        exemplo,
        errors,
        getExemplos,
        getExemplo,
        storeExemplo,
        updateExemplo,
        destroyExemplo
    }
}
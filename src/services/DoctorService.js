import axios from 'axios'

const DOCTOR_BASE_REST_API_URL = 'https://npproject-env.eba-ckfmvcvr.ap-south-1.elasticbeanstalk.com/api/ead/doctors';

class DoctorService{

    getAllDoctors(){
        return axios.get(DOCTOR_BASE_REST_API_URL)
    }

    createDoctor(employee){
        return axios.post(DOCTOR_BASE_REST_API_URL, employee)
    }

    getDoctorById(employeeId){
        return axios.get(DOCTOR_BASE_REST_API_URL + '/' + employeeId);
    }

    updateDoctor(employeeId, employee){
        return axios.put(DOCTOR_BASE_REST_API_URL + '/' + employeeId, employee);
    }

    deleteDoctor(employeeId){
        return axios.delete(DOCTOR_BASE_REST_API_URL + '/' + employeeId);
    }
}

export default new DoctorService();
import { useForm } from "antd/es/form/Form";
import AdminServices from "../service/AdminServices";
import axios from "axios";


const useLoginSubmit= () => {
    const [form] = useForm();
   
    const onSubmit = async(values) => {
        const res = await AdminServices.loginAdmin(values);
        console.log("🚀 ~ onSubmit ~ res:", res)
    }
   
    return {
        onSubmit,
        form
    };


}
export default useLoginSubmit;
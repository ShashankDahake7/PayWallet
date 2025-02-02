import { useNavigate } from "react-router-dom";
import { useRecoilCallback, useSetRecoilState } from "recoil";
import { alertAtom, amountAtom} from "../store/atoms/user";
import axios from "axios";

export default function useTransfer({ amount, id }) {
    const navigate = useNavigate();
    const setAmount = useSetRecoilState(amountAtom);
    const setAlert = useSetRecoilState(alertAtom);
    const handleTransfer = useRecoilCallback(({ set }) => async () => {
        try {
            const response = await axios.post("https://paywallet-backend1.onrender.com/api/v1/account/transfer", {
                amount,
                to: id
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            console.log(response.data.message);
            setAlert({ display: true, color: "green", message: response.data.message });
            setTimeout(()=> {
                navigate("/dashboard")
                setAmount();
            }, [2000])
        } catch (error) {
            setAlert({ display: true, color: "red", message: error.response.data.message });
        }
    });
    return handleTransfer;
}

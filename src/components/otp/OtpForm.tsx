import React, { useRef, useState } from "react";
import OtpInput from "./OtpInput";
import classNames from "classnames";
import { OtpCodeVerifyRequest } from "../../contexts/AuthProvider/utils";
import { useNavigate } from "react-router-dom";

const OtpForm = () => {
    const [otp, setOtp] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const ref = useRef<HTMLFormElement>(null);
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (otp.length < 6) {
            setMessage('Campos não podem ser vazios');
          } else {
            setSubmitting(true);
            const response = await OtpCodeVerifyRequest(otp);
            if (response.url) {
              const regex = /\/reset-password\/([^/]+)\/([^/]+)\//;
              const match = response.url.match(regex);
              if (match) {
                const code = match[1];
                const token = match[2];
                navigate('/reset-password', { replace: true, state: { code, token } });
              } else {
                console.log(response)
                setMessage(response);
              }
            } else if (response.response && response.response.data && response.response.data.otp_code) {
              const errorCode = response.response.data.otp_code;
              setMessage(errorCode ?? "Código inválido");
            } else {
              setMessage('Erro desconhecido');
            }
          }

    };

    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <form className="card shadow-md bg-bodydark flex flex-col justify-center items-center p-8 rounded-2xl" onSubmit={handleSubmit} ref={ref}>
                <div className="my-2">
                    <h2 className="text-xl">One-Time Password</h2>
                    <p className="text-sm text-base-content/80 text-center mt-3 mb-3">Input the code</p>
                </div>
                <OtpInput value={otp} onChange={(val) => { setOtp(val) }} />
                <button
                    className={classNames({
                        "bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-6 mt-5": true,
                        loading: submitting,
                    })}
                    type="submit"
                >
                    Verify OTP Code
                </button>
                {message && <p className="font-bold text-danger">{message}</p>}
            </form>
        </div>

    );
};

export default OtpForm;
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Forms = () => {
    const { name } = useParams();

    useEffect(() => {
        console.log(name);
        switch (name) {
            case "android":
                window.location.href = "https://forms.gle/QrV81FtuNPuE471d6"
                break;
            case "ios":
                window.location.href = "https://forms.gle/Skc5LbGbiSMPJ9Ag8"
                break;
            case "backend":
                window.location.href = "https://forms.gle/aBZpDKeqCB3PYrZ48"
                break;
            case "frontend":
                window.location.href = "https://forms.gle/NJb1jQzTxYf1zx2e7"
                break;
            case "devops":
                window.location.href = "https://forms.gle/WRnfFF3johCCf5qU9"
                break;
            case "uiux":
                window.location.href = "https://forms.gle/m46RnaBP3mabJdN76"
                break;
            default:
                window.location.href = "https://skillcoach.co.kr"
                break;

        }
    });
    return (
        <div>
        </div>
    )
}

export default Forms;
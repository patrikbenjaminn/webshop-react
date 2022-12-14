import '../styles/Contact.css';

const URL = 'http://localhost/webshop/php/admin/readContact.php';

function Readcontact() {

    return (

        <div>
            <ol>
                {palaute?.map(palaute => (
                    <li key={palaute.palauteid}>{palaute.name}{palaute.email}{palaute.timestamp}{palaute.message}</li>
                ))
                }
            </ol>
        </div>
    )

}
export default Readcontact;
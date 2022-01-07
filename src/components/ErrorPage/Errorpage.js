//components
import Modal from '../../UI/modals/Modal';
import QuestionMark from '../../images/question-mark.svg';

//styles
import './ErrorPage.css';

const ErrorPage = () => <Modal>
    <div className="mainbox">
        <div className="error-404">
            <div className="err1 err">4</div>
            <div className="error-o err"><div className="img-container"><img src={QuestionMark} alt="question-mark" /></div></div>
            <div className="err2 err">4</div>
        </div>
        <div className="msg">
            Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
            <p>Try again later.</p>
        </div>

    </div>
</Modal>

export default ErrorPage;
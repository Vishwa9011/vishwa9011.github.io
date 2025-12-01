import WindowWrapper from '@/hoc/WindowWrapper';
import WindowControls from '@components/WindowControls';

const Resume = () => {
    return (
        <div>
            <div id="window-header">
                <WindowControls target="resume" />
            </div>
        </div>
    );
};

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow;

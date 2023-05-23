import React from 'react';
import pdf from '../components/Images/RESUME.pdf'

class WebDev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coreSkills: ['HTML', 'CSS', 'JavaScript (ES6+)'],
            frameworks: ['React', 'Redux', 'React Hooks', 'Node.js', 'Express.js'],
            tools: ['Git', 'GitHub'],
            currentlyLearning: ['NextJS', 'SWR', 'Hasura', 'Serverless Functions', 'Vercel', 'Framer Motion', 'GraphQL', 'Airtable'],
            renderingMethods: ['Static Site Generation', 'Server-Side Rendering', 'Incremental Static Regeneration', 'Hydration'],
            otherSkills: ['SEO (NextJS)', 'Authentication and User Accounts Setup', 'Password-less Login']
        };
    }

    render() {
        return (
            <div className='qbz code white'>
                <h1>Web Developer</h1>
                <h3>I am a passionate and dedicated junior web developer with a strong foundation in core web technologies such as {this.state.coreSkills.join(', ')}.</h3>
                <h3>I have experience in frameworks such as {this.state.frameworks.join(', ')}, and tools like {this.state.tools.join(', ')}.</h3>
                <h3>Currently, I am expanding my skill set by studying {this.state.currentlyLearning.join(', ')}.</h3>
                <h3>I'm exploring various rendering methods like {this.state.renderingMethods.join(', ')}.</h3>
                <h3>In addition, I am honing my skills in {this.state.otherSkills.join(', ')}.</h3>
                <h3>As a budding web developer, I am eager to apply my knowledge in real-world projects and continue my learning journey in the field of web development.</h3>
                <div className="mt-4">
                    <a href={pdf} download="resume.pdf" className="btn btn-danger">
                        Download
                    </a>
                    </div>
            </div>
        );
    }
}

export default WebDev;
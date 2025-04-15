import { SectionLp1 } from '../imports/SectionLp1';
import { SectionLp2 } from '../imports/SectionLp2';
import { SectionLp3 } from '../imports/SectionLp3';

const LandingPage = () => {
    return (
        <main className="fondo-1">
            <section>
                <SectionLp1 />
            </section>

            <section>
                <SectionLp2 />
            </section>

            <section>
                <SectionLp3 />
            </section>
        </main>
    );
};

export default LandingPage;

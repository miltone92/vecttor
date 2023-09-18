import React, { useEffect } from 'react';
import { BodyText, Heading1, Heading2, SubHeading } from '../TextRamp/styled';
import { ColumnCenter, Hero, ListItem, SvgWrap, Wrap } from './styled';
import AssetMedicine from '../../assets/images/undraw/undraw-medicine.svg';
import Svg from 'react-inlinesvg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Wrap>
      <Hero data-aos="fade-up">
        <ColumnCenter>
          <Heading1>VECTTOR Therapy System</Heading1>
          <SubHeading>
            VECTTOR is changing the way the World treats Chronic Pain.
            Eliminating pain at the Cellular level.
          </SubHeading>
        </ColumnCenter>
        <SvgWrap>
          <Svg src={AssetMedicine.src} />
        </SvgWrap>
      </Hero>

      <div className="info-section" data-aos="fade-up">
        <Heading2>How Does VECTTOR Work?</Heading2>
        <BodyText>
          It is believed to stimulate your body to produce proteins called
          Neuropeptides, which cause the smallest blood vessels to open and
          increase oxygenation throughout the body, thus stopping Chronic Pain.
        </BodyText>
      </div>

      <div className="info-section" data-aos="fade-up">
        <Heading2>What Conditions Are Treated With VECTTOR Therapy?</Heading2>
        <ul>
          <ListItem>Complex Regional Pain Syndrome also known as RSD</ListItem>
          <ListItem>
            Asthma, Diabetes, Sickle Cell Disease, Rheumatologic disorders
          </ListItem>
          <ListItem>Spinal Pain, Muscle Pain</ListItem>
          {/* ... List out all the other conditions here ... */}
          <ListItem>Pain due to Rhuematoid Arthritis</ListItem>
        </ul>
      </div>

      <div className="info-section" data-aos="fade-up">
        <Heading2>Who Shouldn&apos;t Use VECTTOR Therapy?</Heading2>
        <ul>
          <ListItem>People with a pacemaker</ListItem>
          <ListItem>Pregnant individuals</ListItem>
          {/* ... List out all the other contraindications here ... */}
          <ListItem>Those with a bacterial infection</ListItem>
        </ul>
      </div>

      <div className="info-section" data-aos="fade-up">
        <Heading2>What Happens During VECTTOR Therapy?</Heading2>
        <BodyText>
          During therapy, small flat rubber adhesive discs (Electrodes) are
          applied to your skin. They&apos;re hooked up to the VECTTOR machine,
          which sends an alternating electrical current to the electrodes. This
          treatment is monitored carefully to ensure its effectiveness.
        </BodyText>
      </div>

      {/* <div className="info-section" data-aos="fade-up">
        <Heading2>Side Effects and Preparations</Heading2>
        <BodyText>
          There have been rare cases of side effects like mild skin irritation,
          dizziness, headaches, and nausea. To prepare for treatment, wear
          loose-fitting clothes, eat a full meal, and inform the staff of any
          medication you&apos;re on.
        </BodyText>
      </div> */}

      <div className="info-section" data-aos="fade-up">
        <Heading2>VECTTOR: A Solution, Not Just A Treatment</Heading2>
        <BodyText>
          The number of sessions varies per individual. Patients are trained on
          using VECTTOR, and once comfortable, can continue the therapy at home.
          It&apos;s not just a temporary solution but a long-term relief method.
        </BodyText>
      </div>

      <div className="info-section" data-aos="fade-up">
        <Heading2>Clinical Support and Credentials</Heading2>
        <ul>
          <ListItem>FDA cleared.</ListItem>
          <ListItem>Designated as a Non-Risk Device by the FDA.</ListItem>
          <ListItem>
            No reportable side effects over its 25-year development and use.
          </ListItem>
          <ListItem>
            <a href="https://drive.google.com/drive/folders/1-HHf9iHYvkk8nGl008OyUWxIGkr0WKNU">
              Clinical Understanding & Technology Potential
            </a>
          </ListItem>
        </ul>
      </div>

      <BodyText data-aos="fade-up">
        <strong>Thank you for considering VECTTOR Therapy.</strong> We offer a
        money-back guarantee. You have nothing to lose but your pain.
      </BodyText>
      <BodyText data-aos="fade-up">
        <strong>Best Regards,</strong> [Your Organization or Doctor&apos;s Name]
      </BodyText>
    </Wrap>
  );
};

export default Landing;

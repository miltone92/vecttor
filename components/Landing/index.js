import { BodyText, Heading1, Heading2, SubHeading } from '../TextRamp/styled';
import { ColumnCenter, Hero, ListItem, SvgWrap, Wrap } from './styled';
import AssetMedicine from '../../assets/images/undraw/undraw-medicine.svg';
import Svg from 'react-inlinesvg';

export const Landing = () => (
  <Wrap>
    <Hero>
      <ColumnCenter>
        <Heading1>VECTTOR</Heading1>
        <Heading2>
          Pioneering Electroceutical Treatment: Pioneering Electroceutical
          Treatment
        </Heading2>

        <SubHeading>
          VECTTOR is an innovative electronic device offering a non-invasive
          treatment method, without the need for medication.
        </SubHeading>
      </ColumnCenter>
      <SvgWrap>
        <Svg src={AssetMedicine.src} />
      </SvgWrap>
    </Hero>

    <div className="info-section">
      <Heading2>How Does VECTTOR Work?</Heading2>
      <ul>
        <ListItem>
          Uses topical electrode placements, typically on the arms or legs.
        </ListItem>
        <ListItem>
          Sends information to the CNS via C fiber sensory neurons.
        </ListItem>
        <ListItem>
          Promotes the production of beneficial Neuropeptides, which:
          <ul>
            <ListItem>Enhance microvascular blood flow.</ListItem>
            <ListItem>
              Counteract oxidative stress—a primary cause of most diseases.
            </ListItem>
          </ul>
        </ListItem>
        <ListItem>
          Boosts production of Neuropeptides including VIP, CGRP, IGF-1, C-AMP,
          and Melatonin.
        </ListItem>
        <ListItem>
          Decreases disease-producing Neuropeptides like TNF, NFKB, and
          Substance P.
        </ListItem>
        <ListItem>
          Positive effects typically observed within 1-3 days, irrespective of
          the pathology.
        </ListItem>
      </ul>
    </div>

    <div className="info-section">
      <Heading2>What Conditions Can VECTTOR Treat?</Heading2>
      <ul>
        <ListItem>Chronic pain-related pathologies.</ListItem>
        <ListItem>
          Asthma, Diabetes, Sickle Cell Disease, Rheumatologic disorders, and
          many more.
        </ListItem>
        <ListItem>
          The key? It targets oxidative stress, a shared factor in many diseases
          and the end-pathway of physical injury.
        </ListItem>
      </ul>
    </div>

    <div className="info-section">
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

    <div className="info-section">
      <Heading2>Field Application</Heading2>
      <BodyText>
        VECTTOR has shown remarkable results in treating conditions like Chronic
        Pain, Diabetes, Renal disease, and Headache Syndromes. It&apos;s
        user-friendly and typically shows responses within 1-3 days. It&apos;s
        been presented internationally, such as at the Al-Hokiel hospital system
        in Demam, Saudi Arabia, with impressive results.
      </BodyText>
    </div>

    <div className="info-section">
      <Heading2>Future Prospects</Heading2>
      <BodyText>
        We&apos;re actively developing a comprehensive webpage, including
        materials intended for Saudi Arabia and a textbook on the device&apos;s
        history, science, and application. Dr. Steve Sacks has several clinic
        concepts and eagerly awaits collaboration to expand VECTTOR&apos;s
        reach.
      </BodyText>
    </div>

    <p>
      <strong>Thank you for your interest.</strong> Looking forward to fruitful
      collaborations and changing the paradigm of chronic disease treatments.
    </p>
    <p>
      <strong>Best Regards,</strong>Dr. Steve Sacks
    </p>
  </Wrap>
);

export default Landing;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./FAQinfo.css";

function FAQinfo() {
  return (
    <Container>
      <Row>
        <Col className="FAQheader">Pet Care FAQs</Col>
      </Row>

      <Row className="space" />

      <Row>
        <Col className="question">
          My pet ate something that could be poisonous. Who do I contact?
        </Col>
      </Row>

      <Row>
        <Col className="answer">
          Call your veterinarian immediately. If you have packaging for the
          substance, have it handy, so you can better answer your veterinarian's
          questions.
        </Col>
      </Row>

      <Row>
        <Col className="question">Is my pet at risk for parvo?</Col>
      </Row>

      <Row>
        <Col className="answer">
          Parvovirus is an extremely contagious viral disease that can be fatal.
          The virus attacks the intestinal tract, but can also affect the heart
          muscle, causing lifelong cardiac problems. Puppies and young dogs, as
          well as unvaccinated dogs, are at risk for parvovirus. Common symptoms
          include fatigue, vomiting, loss of appetite, and bloody diarrhea.
          Contact your veterinarian regarding any concerns.
        </Col>
      </Row>

      <Row>
        <Col className="question">
          Is it really necessary to bring my dog and/or cat in for a yearly
          comprehensive exam?
        </Col>
      </Row>

      <Row>
        <Col className="answer">
          Comprehensive examinations are recommended AT LEAST annually to check
          for health issues that may not be apparent to owners. During a
          comprehensive examination the veterinarian will examine your pet's
          eyes, ears, skin and hair coat, listen to their heart, and discuss any
          concerns you may have.
        </Col>
      </Row>

      <Row>
        <Col className="question">
          When do I switch from puppy/kitten food to adult food?
        </Col>
      </Row>

      <Row>
        <Col className="answer">
          Switching a puppy or kitten to adult food too early can cause obesity
          and gastro-intestinal issues. We recommend switching to adult dog or
          cat food between 10-12 months.
        </Col>
      </Row>

      <Row>
        <Col className="question">Should I declaw my cat?</Col>
      </Row>

      <Row>
        <Col className="answer">
          While we do not promote declawing of all cats, we recognize that there
          are certain times and situations that declawing may be necessary for
          the health and safety of the cat and family. In order to ensure the
          best outcome, we use Co2 laser or all de-claws, keep them overnight
          for observation, and provide comprehensive pain control.
        </Col>
      </Row>

      <Row>
        <Col className="question">How can I tell if my pet has mange?</Col>
      </Row>

      <Row>
        <Col className="answer">
          PMange is a skin disease caused by several species of tiny mites found
          in skin and hair follicles.2 Mange symptoms usually depend on which
          type of mite is present, but some common symptoms include intense
          itching, bald spots, rashes, and scabs.2 All mites can cause mild to
          severe skin infections if they are not treated.2 Talk to your
          veterinarian if you notice any of these signs in your pet.
        </Col>
      </Row>

      <Row>
        <Col className="question">
          My pet has swollen paws. What should I do?
        </Col>
      </Row>

      <Row>
        <Col className="answer">
          Swollen paws can occur for a variety of reasons. Swelling can be the
          result of an insect bite or sting, infection, tissue damage, or other
          type of injury. If your pet has any signs of pain or discomfort,
          contact your veterinarian right away.
        </Col>
      </Row>

      <Row>
        <Col className="question">
          My pet seems to be in pain while walking or running. What should I do?
        </Col>
      </Row>

      <Row>
        <Col className="answer">
          This could be a sign of an injury, or a chronic condition like
          arthritis. If your pet is showing signs of joint pain, or has
          difficulty moving or standing up, let your veterinarian know right
          away.
        </Col>
      </Row>

      <Row>
        <Col className="question">
          My pet has gained a considerable amount of weight. Should I be
          concerned?
        </Col>
      </Row>

      <Row>
        <Col className="answer">
          Speak with your veterinarian to determine if your pet is
          overnourished, not getting enough exercise, or is retaining weight.
          This may lead to obesity, which can eventually damage their joints,
          affect their ability to breathe or cause other serious health
          problems.
        </Col>
      </Row>

      <Row>
        <Col className="question">
          My pet has a persistent, dry cough. What should I do?
        </Col>
      </Row>

      <Row>
        <Col className="answer">
          An ongoing dry cough may be a sign that your dog has "kennel cough"—
          highly contagious upper respiratory viral and bacterial infections
          that affect your dog's voice box and windpipe.5 If you suspect you dog
          has kennel cough, isolate them from other dogs right away, and call
          your veterinarian.
        </Col>
      </Row>

      <Row>
        <Col className="question">
          What are the signs that my pet may have allergies?
        </Col>
      </Row>

      <Row>
        <Col className="answer">
          Your pet can show allergic symptoms when its immune system begins
          fighting off everyday substances, or allergens, such as pollen, mold
          spores, dust, or cigarette smoke. If your pet has allergies, coming
          into contact with a certain substance, including eating or inhaling
          it, may result in a reaction. Look out for signs of allergies,
          including increased scratching, moist or reddish skin, runny eyes,
          sneezing, vomiting or itchy base of the tail (usually an allergy to
          fleas, called flea allergy dermatitis). If you notice any of these
          signs, contact your veterinarian.
        </Col>
      </Row>
      <Row>
        <Col className="question">
          I think my pet has a skin problem. How can I tell?
        </Col>
      </Row>

      <Row>
        <Col className="answer">
          Your pet's skin is an indicator of overall health. If your pet is
          experiencing these following symptoms, or any other symptoms, you
          should contact your veterinarian.
          <Col className="list">
            Excessive scratching, licking or chewing of skin{" "}
          </Col>
          <Col className="list">Irritated red or inflamed skin Scabs</Col>
          <Col className="list">Swollen patches or lumps</Col>
          <Col className="list">Skin discoloration</Col>
          <Col className="list">Scaly patches</Col>
        </Col>
      </Row>

      <Row className="baseline" />
      
    </Container>
  );
}

export default FAQinfo;

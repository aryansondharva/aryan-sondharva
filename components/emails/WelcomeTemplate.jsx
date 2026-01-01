import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const YelpRecentLoginEmail = ({
  u_name,
  u_email,
  u_phone,
  u_message,
  u_user,
  loginDate,
}) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(loginDate);

  return (
    <Html>
      <Head />
      <Preview>Aryan Sondharva Portfolio</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {u_user === "admin" ? "Aryan" : u_name.split(" ")[0]},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {u_user === "admin"
                    ? "You've got a new contact enquiry on the website."
                    : "Thank you for contacting me! I'll get back to you as soon as possible."}
                </Heading>

                <Text style={paragraph}>
                  <b>Time: </b>
                  {formattedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Name: </b>
                  {u_name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {u_email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Phone: </b>
                  {u_phone}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message: </b>
                  <br />
                  {u_message}
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                {u_user === "admin" ? (
                  <Button href={`mailto:${u_email}`} style={button}>
                    Revert Back
                  </Button>
                ) : (
                  <Button href={`mailto:contact@aryansondharva.in`} style={button}>
                    Mail Admin
                  </Button>
                )}
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src="https://aryansondharva.in/email-footer.png"
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © {new Date().getFullYear()} | Aryan Sondharva | Portfolio | www.aryansondharva.in
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

YelpRecentLoginEmail.PreviewProps = {
  userFirstName: "Alan",
  loginDate: new Date("September 7, 2022, 10:58 am"),
  loginDevice: "Chrome on Mac OS X",
  loginLocation: "Upland, California, United States",
  loginIp: "47.149.53.167",
};

export default YelpRecentLoginEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};

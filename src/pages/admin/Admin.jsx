import styled from "styled-components";
import UsersList from "../../sections/Admin/UsersList";
const Section = styled.section`
  padding: 3rem 0;
  background: linear-gradient(
    315deg,
    rgba(227, 248, 255, 1) 0%,
    rgba(254, 235, 255, 1) 100%
  );
`;
const Admin = () => {
  return (
    <Section>
      <UsersList />
    </Section>
  );
};

export default Admin;

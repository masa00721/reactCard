import styled from "styled-components";
import { SearchInput } from "../../molecules/SearchInput";
import { UserCard } from "../../organisms/user/UserCard";
import { Header } from "../layout/Header";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `${val}ボーダーコリー`,
    image: "https://source.unsplash.com/yihlaRCCvd4",
    email: "12345@12.com",
    phone: "000-123-4444",
    company: {
      name: "ドッグ株式会社"
    },
    website: "https//google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();

  return (
    <SContainer>
      <Header />
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  text-align: center;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

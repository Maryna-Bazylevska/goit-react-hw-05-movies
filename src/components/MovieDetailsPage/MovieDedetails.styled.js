import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  margin-bottom: 5px;
`;
export const MovieInformation = styled.div`
  padding-top: 10px;
  display: flex;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoWrapper = styled.div`
  display: inline-block;
  margin-left: 20px;
`;
export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
`;
export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 20px * 6) / 6);
  margin-right: 20px;
  margin-bottom: 20px;
`;
export const Photo = styled.img`
  width: 100px;
`;
export const Name = styled.p`
  font-weight: 500;
  color: black;
`;
export const Character = styled.p`
  color: black;
`;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { cleanProducts } from "../../redux/action";
import { Container, Wrapper, Icon, Input, Form } from "./SearchBar.styled.components.js";
import logo from "../../assets/logo.png";
import { searchPlaceHolderTranslate } from "../../utils";

export default function SearchBar() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(cleanProducts());
    navigate(`/items?search=${query}`);
  };

  const handleLogoClick = () => {
    dispatch(cleanProducts());
    setQuery('');
    navigate(`/`);
  };

  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="logo" onClick={handleLogoClick}/>
        <Form onSubmit={handleSearch}>
          <Input
            type="text"
            value={query}
            placeholder={searchPlaceHolderTranslate}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Icon onClick={handleSearch}>
            <AiOutlineSearch color='var(--lightGrey)' />
          </Icon>
        </Form>
      </Wrapper>
    </Container>
  );
}

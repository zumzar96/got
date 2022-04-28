import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery } from "react-query";
import axios from "axios";

function Homepage(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        {" "}
        <Button type="submit" onClick={() => navigate("/books")}>
          books
        </Button>
      </div>
      <div>
        {" "}
        <Button type="submit" onClick={() => navigate("/characters")}>
          characters
        </Button>
      </div>
      <div>
        {" "}
        <Button type="submit" onClick={() => navigate("/houses")}>
          houses
        </Button>
      </div>
      <div>
        {" "}
        <Button type="submit" onClick={() => navigate("/login")}>
          login
        </Button>
      </div>
    </div>
  );
}

export default Homepage;

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullWatch = () => {
  const [watch, setWatch] = React.useState();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchWatch() {
      try {
        const { data } = await axios.get(
          "https://6399e68f16b0fdad774d67dc.mockapi.io/photo_collections/" + id
        );
        setWatch(data);
      } catch (error) {
        alert("Ошибка при получении товара!");
        navigate("/");
      }
    }

    fetchWatch();
  }, []);

  if (!watch) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={watch.imageUrl} />
      <h2>{watch.title}</h2>
      <h4>{watch.price} ₽</h4>
      <Link to="/products">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullWatch;

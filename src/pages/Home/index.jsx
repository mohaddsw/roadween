import styled from "styled-components";
import { useState, useEffect } from "react";

let data1 = [
  {
    id: 1,
    title: "first item",
    dates: [
      {
        date: "2020-01-01",
        price: {
          currency: "AED",
          amount: 5005,
        },
      },
      {
        date: "2020-01-02",
        price: {
          currency: "AED",
          amount: 5005,
        },
      },
      {
        date: "2020-01-03",
        price: {
          currency: "AED",
          amount: 4005,
        },
      },
      {
        date: "2020-01-10",
        price: {
          currency: "AED",
          amount: 5005,
        },
      },
      {
        date: "2020-01-11",
        price: {
          currency: "AED",
          amount: 4805,
        },
      },
    ],
  },
  {
    id: 2,
    title: "second item",
    dates: [
      {
        date: "2020-01-01",
        price: {
          currency: "AED",
          amount: 5505,
        },
      },
      {
        date: "2020-01-02",
        price: {
          currency: "AED",
          amount: 5505,
        },
      },
      {
        date: "2020-01-05",
        price: {
          currency: "AED",
          amount: 4205,
        },
      },
      {
        date: "2020-01-10",
        price: {
          currency: "AED",
          amount: 3205,
        },
      },
      {
        date: "2020-01-12",
        price: {
          currency: "AED",
          amount: 5005,
        },
      },
    ],
  },
  {
    id: 3,
    title: "third item",
    dates: [
      {
        date: "2020-01-03",
        price: {
          currency: "AED",
          amount: 5105,
        },
      },
      {
        date: "2020-01-04",
        price: {
          currency: "AED",
          amount: 5105,
        },
      },
      {
        date: "2020-01-08",
        price: {
          currency: "AED",
          amount: 4005,
        },
      },
      {
        date: "2020-01-10",
        price: {
          currency: "AED",
          amount: 4205,
        },
      },
      {
        date: "2020-01-12",
        price: {
          currency: "AED",
          amount: 5055,
        },
      },
    ],
  },
  {
    id: 4,
    title: "fourth item",
    dates: [
      {
        date: "2020-01-02",
        price: {
          currency: "AED",
          amount: 5105,
        },
      },
      {
        date: "2020-01-06",
        price: {
          currency: "AED",
          amount: 5105,
        },
      },
      {
        date: "2020-01-09",
        price: {
          currency: "AED",
          amount: 4005,
        },
      },
      {
        date: "2020-01-10",
        price: {
          currency: "AED",
          amount: 4205,
        },
      },
      {
        date: "2020-01-11",
        price: {
          currency: "AED",
          amount: 5055,
        },
      },
      {
        date: "2020-01-13",
        price: {
          currency: "AED",
          amount: 5055,
        },
      },
    ],
  },
];
let data2 = [
  {
    id: 1,
    title: "first item",
    dates: [
      {
        date: "2020-01-21",
        price: {
          currency: "AED",
          amount: 3005,
        },
      },
      {
        date: "2020-01-22",
        price: {
          currency: "AED",
          amount: 5015,
        },
      },
      {
        date: "2020-01-23",
        price: {
          currency: "AED",
          amount: 4205,
        },
      },
    ],
  },
  {
    id: 2,
    title: "second item",
    dates: [
      {
        date: "2020-01-21",
        price: {
          currency: "AED",
          amount: 5105,
        },
      },
      {
        date: "2020-01-22",
        price: {
          currency: "AED",
          amount: 3505,
        },
      },
      {
        date: "2020-01-25",
        price: {
          currency: "AED",
          amount: 1205,
        },
      },
    ],
  },
  {
    id: 5,
    title: "fifth item",
    dates: [
      {
        date: "2020-01-23",
        price: {
          currency: "AED",
          amount: 6105,
        },
      },
      {
        date: "2020-01-24",
        price: {
          currency: "AED",
          amount: 2100,
        },
      },
      {
        date: "2020-01-28",
        price: {
          currency: "AED",
          amount: 1005,
        },
      },
      {
        date: "2020-01-30",
        price: {
          currency: "AED",
          amount: 3205,
        },
      },
    ],
  },
  {
    id: 4,
    title: "fourth item",
    dates: [],
  },
];

const Home = () => {
  const [data, setData] = useState(data1);
  const [items, setItems] = useState([]);
  const [dates, setDates] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const items = [];
    const dates = [];

    data?.map((item) => {
      items.push(item.title);
    });
    data?.map((item) => {
      item.dates.map((date) => {
        dates.push(date.date);
      });
    });
    setItems(items);
    const newDates = new Set(dates);

    setDates([...newDates]);
  }, [data]);

  const changeValueOfItem = (e) => {
    const filter = data.filter((item) => {
      return item.title === e.target.value;
    });
    setFilterData(filter);
  };
  const changeValueOfDate = (e) => {
    const datas = [];
    data.map((item) => {
      item.dates.map((date) => {
        if (e.target.value === date.date) datas.push(item);
      });
    });
    setFilterData(datas);
  };
  const fetchData = () => {
    console.log("fetch");
    setData(data2)
  };

  return (
    <Container>
      <Content>
        <Row>
          <FilterDate>
            <label htmlFor="date">Choose a item:</label>
            <select name="cars" id="date" onChange={changeValueOfItem}>
              {items.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </FilterDate>

          <FilterItem>
            <label htmlFor="cars">Choose a date:</label>

            <select name="cars" id="cars" onChange={changeValueOfDate}>
              {dates.map((date, index) => {
                return (
                  <option key={`${date}-${index}`} value={date}>
                    {date}
                  </option>
                );
              })}
            </select>
          </FilterItem>
          <FeatchData>
            <button onClick={fetchData}>featch Data</button>
          </FeatchData>
        </Row>

        <Cards>
          {filterData.map((item, index) => {
            return (
              <Card key={index}>
                title:{item.title}
                <hr />
                {item.dates.map((date) => {
                  return (
                    <>
                      <span> price:{date.price.amount}</span>
                    </>
                  );
                })}
              </Card>
            );
          })}
        </Cards>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  width: 800px;
  height: 700px;
  border: 1px solid #eeee;
  padding: 50px 20px;
  border-radius: 5px;
  background-color: #eee;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
const FilterDate = styled.div``;
const FilterItem = styled.div``;
const FeatchData = styled.div``;
const Cards = styled.div`
  display: flex;
  margin-top: 30px;
`;
const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  margin: 5px;
  padding: 50px;
  box-sizing: border-box;
`;
export default Home;

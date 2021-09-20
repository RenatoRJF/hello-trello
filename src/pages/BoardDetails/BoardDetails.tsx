import { useEffect } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

import './BoardDetails.scss';

import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { fetchListCards } from "../../store/actions/cards";
import { fetchBoardLists } from "../../store/actions/lists";

const BoardDetails = () => {
  const dispatch = useAppDispatch();
  const { boardId } = useParams<{ boardId: string }>();
  const { lists, isFetchingLists, cards } = useAppSelector(state => ({
    lists: state.lists.data,
    isFetchingLists: state.lists.isFetching,
    cards: state.cards,
  }))

  useEffect(() => {
    if (boardId) {
      dispatch(fetchBoardLists(boardId))
    }
  }, [dispatch, boardId])
  
  useEffect(() => {
    if (lists?.length > 0) {
      Promise.all(lists.map((list: any) => dispatch(fetchListCards(list?.id))))
    }
  }, [dispatch, lists]);

  if (isFetchingLists || !lists) {
    return <Loader />
  }

  return (
  <div className="app__board__details">
    <h1 className="app__board__details__title">Board name</h1>

    <div className="board__lists">
      {lists.map((list: any) => (
        <div className="board__lists__single" key={list.id}>
          <h2 className="board__lists__single__title">{list.name}</h2>

          {Array.isArray(cards[list.id]?.data) && cards[list.id]?.data?.map((card: any) => (
            <Card key={card.id} title={card.name} />
          ))}
        </div>  
      ))}
    </div>
  </div>
);}

export default BoardDetails;

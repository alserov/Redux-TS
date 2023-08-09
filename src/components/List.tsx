import {memo} from "react";
import {useAppDispatch, useAppSelector} from "../store/store";
import {listItemAction} from "../utilities/list";

export const List = memo(
	() => {
		const listData = useAppSelector(state => state.list.list)
		const dispatch = useAppDispatch()
		return (
			<div>
				{listData.map(item => (
					<div key={item.title} onClick={() => dispatch(listItemAction(item.title))}>{item.title}</div>
				))}
			</div>
		)
	}
)
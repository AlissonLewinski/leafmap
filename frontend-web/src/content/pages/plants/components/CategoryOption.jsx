import './CategoryOption.css';
import {Link} from 'react-router-dom'
import { removeAccents } from '../../../../util';

const defaultIcon = 'data:image/svg+xml;base64,PHN2ZyBpZD0iRmxhdCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZjZhYTAiPjxwYXRoIGQ9Im0yMjggOTJoODIuMDUxYTEwOS45NDkgMTA5Ljk0OSAwIDAgMSAxMDkuOTQ5IDEwOS45NDl2MjYuMDUxYTAgMCAwIDAgMSAwIDBoLTgyLjA1MWExMDkuOTQ5IDEwOS45NDkgMCAwIDEgLTEwOS45NDktMTA5Ljk0OXYtMjYuMDUxYTAgMCAwIDAgMSAwIDB6IiB0cmFuc2Zvcm09Im1hdHJpeCgwIDEgLTEgMCA0ODQgLTE2NCkiLz48cGF0aCBkPSJtOTIgMjg0aDgyLjA1MWExMDkuOTQ5IDEwOS45NDkgMCAwIDEgMTA5Ljk0OSAxMDkuOTQ5djI2LjA1MWEwIDAgMCAwIDEgMCAwaC04Mi4wNTFhMTA5Ljk0OSAxMDkuOTQ5IDAgMCAxIC0xMDkuOTQ5LTEwOS45NDl2LTI2LjA1MWEwIDAgMCAwIDEgMCAweiIgdHJhbnNmb3JtPSJtYXRyaXgoMCAxIC0xIDAgNTQwIDE2NCkiLz48cGF0aCBkPSJtMjU2IDI1Nmg4Mi4wNTFhMTA5Ljk0OSAxMDkuOTQ5IDAgMCAxIDEwOS45NDkgMTA5Ljk0OXYyNi4wNTFhMCAwIDAgMCAxIDAgMGgtODIuMDUxYTEwOS45NDkgMTA5Ljk0OSAwIDAgMSAtMTA5Ljk0OS0xMDkuOTQ5di0yNi4wNTFhMCAwIDAgMCAxIDAgMHoiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAtMSA3MDQgNjQ4KSIvPjxwYXRoIGQ9Im02NCAxMjBoODIuMDUxYTEwOS45NDkgMTA5Ljk0OSAwIDAgMSAxMDkuOTQ5IDEwOS45NDl2MjYuMDUxYTAgMCAwIDAgMSAwIDBoLTgyLjA1MWExMDkuOTQ5IDEwOS45NDkgMCAwIDEgLTEwOS45NDktMTA5Ljk0OXYtMjYuMDUxYTAgMCAwIDAgMSAwIDB6IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgLTEgMzIwIDM3NikiLz48L2c+PHBhdGggZD0ibTI1NiAyNTYtNTguODQ5LTU4Ljg0OWExMDkuNzU1IDEwOS43NTUgMCAwIDAgLTE1NS4yNDQgMGwtMTcuOTA3IDE3LjkwOCA1OC44NDkgNTguODQ4YTEwOS43NTMgMTA5Ljc1MyAwIDAgMCAxNTUuMjQ0IDB6IiBmaWxsPSIjZmQ4NGIzIi8+PHBhdGggZD0ibTQ4OCAyOTYuOTQxLTU4Ljg0OS01OC44NDhhMTA5Ljc1MyAxMDkuNzUzIDAgMCAwIC0xNTUuMjQ0IDBsLTE3LjkwNyAxNy45MDcgNTguODQ5IDU4Ljg0OWExMDkuNzU1IDEwOS43NTUgMCAwIDAgMTU1LjI0NCAweiIgZmlsbD0iI2ZkODRiMyIvPjxwYXRoIGQ9Im0xNzMuOTQ5IDI1Nmg4Mi4wNTFhMCAwIDAgMCAxIDAgMHYyNi4wNTFhMTA5Ljk0OSAxMDkuOTQ5IDAgMCAxIC0xMDkuOTQ5IDEwOS45NDloLTgyLjA1MWEwIDAgMCAwIDEgMCAwdi0yNi4wNTFhMTA5Ljk0OSAxMDkuOTQ5IDAgMCAxIDEwOS45NDktMTA5Ljk0OXoiIGZpbGw9IiNmZGEyYzYiLz48cGF0aCBkPSJtMzY1Ljk0OSAxMjBoODIuMDUxYTAgMCAwIDAgMSAwIDB2MjYuMDUxYTEwOS45NDkgMTA5Ljk0OSAwIDAgMSAtMTA5Ljk0OSAxMDkuOTQ5aC04Mi4wNTFhMCAwIDAgMCAxIDAgMHYtMjYuMDUxYTEwOS45NDkgMTA5Ljk0OSAwIDAgMSAxMDkuOTQ5LTEwOS45NDl6IiBmaWxsPSIjZmRhMmM2Ii8+PHBhdGggZD0ibTI1NiAyNTYtNTguMDE4IDU4LjAxOGExMDkuOTUxIDEwOS45NTEgMCAwIDAgMCAxNTUuNDkzbDE4LjAxOCAxOC40ODkgNTguNDItNTguMDg3YTEwOS45NTEgMTA5Ljk1MSAwIDAgMCAwLTE1NS40OTN6IiBmaWxsPSIjZmQ4NGIzIi8+PHBhdGggZD0ibTI5NiAyNC01OC40MiA1OC4wODdhMTA5Ljk1MSAxMDkuOTUxIDAgMCAwIDAgMTU1LjQ5M2wxOC40MiAxOC40MiA1OC4wMTgtNTguMDE4YTEwOS45NTEgMTA5Ljk1MSAwIDAgMCAwLTE1NS40OTN6IiBmaWxsPSIjZmQ4NGIzIi8+PHBhdGggZD0ibTMzNy45NDkgMjg0aDgyLjA1MWEwIDAgMCAwIDEgMCAwdjI2LjA1MWExMDkuOTQ5IDEwOS45NDkgMCAwIDEgLTEwOS45NDkgMTA5Ljk0OWgtODIuMDUxYTAgMCAwIDAgMSAwIDB2LTI2LjA1MWExMDkuOTQ5IDEwOS45NDkgMCAwIDEgMTA5Ljk0OS0xMDkuOTQ5eiIgZmlsbD0iI2ZkYTJjNiIgdHJhbnNmb3JtPSJtYXRyaXgoMCAtMSAxIDAgLTI4IDY3NikiLz48cGF0aCBkPSJtMjAxLjk0OSA5Mmg4Mi4wNTFhMCAwIDAgMCAxIDAgMHYyNi4wNTFhMTA5Ljk0OSAxMDkuOTQ5IDAgMCAxIC0xMDkuOTQ5IDEwOS45NDloLTgyLjA1MWEwIDAgMCAwIDEgMCAwdi0yNi4wNTFhMTA5Ljk0OSAxMDkuOTQ5IDAgMCAxIDEwOS45NDktMTA5Ljk0OXoiIGZpbGw9IiNmZGEyYzYiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDI4IDM0OCkiLz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiNmZmU3NmMiIHI9IjU2Ii8+PC9zdmc+'

function CategoryOption(props) {

    const onLinkClick = () => {
        props.onCategoryClick(props.name)
    }

	return (
		<Link to={`/plantas/${props.name === 'Todas' ? '' : removeAccents(props.name.toLowerCase())}`} className="category-link" onClick={onLinkClick}>
            <div className="category-option">
                <img src={props.icon ? props.icon : defaultIcon} alt="" height="32" width="32"/>
                <h5 className="category-name">{props.name}</h5>
            </div>
        </Link>
	);
}

export default CategoryOption;
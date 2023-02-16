const RankingGrid = ({items, imgArr, drag, allowDrop, drop }) => {
    const rankingGrid = []
    const cellCollectionTop = [];
    const cellCollectionMiddle = []
    const cellCollectionBottom = []
    const cellCollectionWorst = []

    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        let totalCollection = cellCollection.length
        if (rankNum > 0) {
            let item = items.find(o => o.ranking === rankNum);
            console.log(item)
            cellCollection.push(
                <div key={`rank-item-${item ? item.id: totalCollection}-${rankNum}`} 
                     id={`rank-${rankNum}`} 
                     onDrop={drop} 
                     onDragOver={allowDrop} 
                     className="rank-cell"
                >
                {(item != null) ?
                    <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true"
                         onDragStart={drag}/>
                    : null}
            </div>);
        } else {
            cellCollection.push(<div  key={`rank-item-${totalCollection}-${rankNum}`} className="row-label">
                <h4>{rowLabel}</h4>
            </div>);
        }
    }

    function createCellsForRow(rowNum) {
        let rankNum = 0;
        let currCollection = [];
        let label = "";
        const numCells = 5;
        for (let a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "Top Tier";
            } else if (rowNum === 2) {
                currCollection = cellCollectionMiddle;
                label = "Middle Tier";
            } else if (rowNum === 3) {
                currCollection = cellCollectionBottom;
                label = "Bottom Tier";
            } else if (rowNum === 4) {
                currCollection = cellCollectionWorst;
                label = "Worst Tier";
            }
            pushCellMarkupToArr(currCollection, rankNum, label);

        }
    }

    function createCellsForRows() {
        const maxRows = 4
        for (let i = 1; i <= maxRows; i++) {
            createCellsForRow(i)
        }
    }

    function createRowsForGrid() {
        rankingGrid.push(<div className="rank-row top-tier" key={1}>{cellCollectionTop}</div>)
        rankingGrid.push(<div className="rank-row middle-tier" key={2}>{cellCollectionMiddle}</div>)
        rankingGrid.push(<div className="rank-row bottom-tier" key={3}>{cellCollectionBottom}</div>)
        rankingGrid.push(<div className="rank-row worst-tier" key={4}>{cellCollectionWorst}</div>)
        return rankingGrid
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid()
    }

    return (
        <div className="rankings">
            {createRankingGrid()}
        </div>

    )
}

export default RankingGrid
export default function ComicCard(props) {
    return (
        <div className='col'>
            <div className='card rounded-0'>
                <img src={props.thumb} alt={props.title} />
                <div className='card-body p-0 py-3'>
                    <p className='fs-6'>{props.series.toUpperCase()}</p>
                </div>
            </div>
        </div>
    )
}
import Moment from 'moment';

export const Purchase = (props: any) => {

    console.log(props);

    return (
        <>
                    <tr>
                    <td>{props.Product.name}</td>
                    <td>{props.quantity}</td>
                    <td>{props.total}</td>
                    <td>{Moment(props.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                    </tr>
        </>
    )
}
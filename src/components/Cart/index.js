import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteItem, addItemByCart, removeItemByCart } from "../../redux/reducers/cartReducer";

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	let totalPriceCart = 0;

	cart.items.map((item) => {
		totalPriceCart += item.price * item.quantity;
	});

	return (
		<>
			<button type='button' className='btn btn-danger' data-bs-toggle='modal' data-bs-target='#CartModal'>
				<span style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
					<i className='fas fa-shopping-cart'></i>
					<div>{cart.totalOfItems}</div>
				</span>
			</button>

			{/* Modal */}
			<div
				className='modal fade'
				id='CartModal'
				tabIndex='-1'
				aria-labelledby='CartModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='CartModalLabel'>
								My Cart
							</h5>
							<button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>

						<div className='modal-body table-responsive'>
							<table className='table table-hover'>
								<thead>
									<tr>
										<th scope='col'>Del</th>
										<th scope='col'>Product</th>
										<th scope='col'>Qty</th>
										<th scope='col'>Price</th>
										<th scope='col'>+</th>
										<th scope='col'>-</th>
										<th scope='col'>Total</th>
									</tr>
								</thead>
								<tbody>
									{cart.items.map((item) => {
										return (
											<tr key={item.id}>
												<td>
													<button
														className='badge bg-danger'
														onClick={() => {
															dispatch(deleteItem(item));
														}}
													>
														<i className='fas fa-window-close'></i>
													</button>
												</td>
												<td>{item.name}</td>
												<td>{item.quantity}</td>
												<td>R$ {item.price.toFixed(2)}</td>
												<td>
													<button
														onClick={() => dispatch(addItemByCart(item))}
														className='badge badge-pill bg-primary'
													>
														<i className='fas fa-plus'></i>
													</button>
												</td>
												<td>
													<button
														onClick={() => dispatch(removeItemByCart(item))}
														className='badge badge-pill bg-danger'
													>
														<i className='fas fa-minus'></i>
													</button>
												</td>
												<td>R$ {item.totalPrice.toFixed(2)}</td>
											</tr>
										);
									})}
									<tr>
										<th colSpan='2' scope='col'>
											Total
										</th>
										<th colSpan='3'>{cart.totalOfItems} items</th>
										<th colSpan='2'>R$ {totalPriceCart.toFixed(2)}</th>
									</tr>
								</tbody>
							</table>
						</div>

						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;

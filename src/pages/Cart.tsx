import ShoppingCartCourseComponent from "../components/Course/ShoppingCartCourseComponent";
import CourseShoppingCartData from "../data/CourseShoppingCartData.json";

import { Link } from "react-router-dom";
export default function Cart() {
	return (
		<div className="container">
			{CourseShoppingCartData.length === 0 && (
				<>
					<h1 className="text-2xl text-gray-500 font-bold text-center mt-4">
						yout Cart is Empty
					</h1>
					<Link to={"/"} className="button w-[150px] m-auto mt-5 py-3">
						{" "}
						keep shooping{" "}
					</Link>
				</>
			)}
			<h1 className="text-2xl font-bold mt-4"> Shopping Cart </h1>
			<h4 className="text-md font-bold mt-2 mb-5 text-gray-800">
				{CourseShoppingCartData.length} courses in cart
			</h4>
			<div className="grid relative gap-4 md:grid-cols-2 lg:grid-cols-3  mb-14 container">
				{CourseShoppingCartData.map((course, ind) => {
					return <ShoppingCartCourseComponent key={ind} course={course} />;
				})}
			</div>
		</div>
	);
}

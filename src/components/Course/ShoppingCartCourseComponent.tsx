import { ShoppingCartCourseComponentType } from "../../Types/ShoppingCartCourseComponentType";

export default function ShoppingCartCourseComponent({
	course,
	className = "",
}: ShoppingCartCourseComponentType) {
	return (
		<>
			<div className={className}> hello </div>
			{JSON.stringify(course)}
		</>
	);
}

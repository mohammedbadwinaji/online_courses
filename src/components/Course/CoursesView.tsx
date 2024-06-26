import CourseCartComponent from "./CourseCartComponent";
import CourseSearch from "./CourseSearch";
import CoursesViewData from "../../data/CoursesViewData.json";

export default function CoursesView() {
	return (
		<>
			<CourseSearch className="grid md:grid-cols-2 gap-5 mb-5" />
			<div className="grid relative gap-4 md:grid-cols-2 lg:grid-cols-3  mt-14">
				{CoursesViewData.map((course, ind) => {
					return <CourseCartComponent key={ind} course={course} />;
				})}
			</div>
		</>
	);
}

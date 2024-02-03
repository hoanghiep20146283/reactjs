import React, { FC } from 'react';
import styles from './CourseInfo.module.css';
import Button from '../../common/Button/Button';
import { Course } from '../../store/courses/types';
import { convertToHoursAndMinutes, convertDateFormat } from '../../common/utils';
import { useDeleteCourseMutation } from '../../store/courses/reducer';
import { useNavigate } from 'react-router-dom';
type CourseProperty = {
	course: Course
}

const CourseInfo: FC<CourseProperty> = ({ course }) => {
	const [deleteCourse] = useDeleteCourseMutation();
	const navigate = useNavigate();
	const handleDeleteCourse = async e => {
		e.preventDefault();
		const result = await deleteCourse(course.id);
		if ("error" in result) {
			alert(JSON.stringify(result.error));
		} else {
			navigate('/courses');
		}
	}

	return (
		<>
			<div className={styles.CourseWrapper}>
				<div className={styles.TopStripe}></div>
				<div>
					<p className={styles.Title}>{course.title}</p>
				</div>
				<div className={styles.CourseInfo} data-testid='CourseInfo'>
					<div className={styles.CourseDescription}>
						<p className={styles.Description}>
							{course.description}
						</p>
					</div>
					<div className={styles.CourseAuditInfor}>
						<p className={styles.AuditInfo}>
							<b>Authors:</b> {course.authors.join(', ')}
						</p>
						<p className={styles.AuditInfo}>
							<b>Duration:</b> {convertToHoursAndMinutes(course.duration)}
						</p>
						<p className={styles.AuditInfo}>
							<b>Created:</b>  {convertDateFormat(course.creationDate)}
						</p>
						<div className={styles.ButtonList}>
							<Button content='Show Courses' type='button'></Button>
							<div className={styles.icon} onClick={handleDeleteCourse}>
								<img src={'../assets/images/Icon-Trash.png'} />
							</div>
							<div className={styles.icon}>
								<img src={'../assets/images/Edit.png'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};

export default CourseInfo;

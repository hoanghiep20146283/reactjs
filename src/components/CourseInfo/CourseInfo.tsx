import React, { FC } from 'react';
import styles from './CourseInfo.module.css';
import Button from '../../common/Button/Button';

const CourseInfo: FC = () => (
	<>
		<div className={styles.TopStripeWrapper}>
			<div className={styles.TopStripe}></div>
			<div className={styles.ContextWrap}>
				<div>
					<p className={styles.Title}>Angular</p>
				</div>
				<div className={styles.CourseInfo} data-testid='CourseInfo'>
					<div className={styles.CourseDescription}>
						<p className={styles.Description}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
					<div className={styles.CourseAuditInfor}>
						<p className={styles.AuditInfo}>
							<b>Authors:</b> Dave Haisenberg, Tony Ja
						</p>
						<p className={styles.AuditInfo}>
							<b>Duration:</b> 2:30 hours
						</p>
						<p className={styles.AuditInfo}>
							<b>Created:</b> 20.03.2012
						</p>
						<div className={styles.ButtonList}>
							<Button content='Show Courses'></Button>
							<div className={styles.icon}>
								<img src={'../assets/images/Icon-Trash.png'} />
							</div>
							<div className={styles.icon}>
								<img src={'../assets/images/Edit.png'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default CourseInfo;

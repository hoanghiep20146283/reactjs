import styles from './styles.module.css'

const fetchData = async () => {
    const courseResponse = await fetch(`http://localhost:4000/courses/${params.courseId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const courseDetailResponse: CourseResponse = await courseResponse.json();
}

export default function Courses({ params }: { params: { name: string } }) {
    return (
        <div className={styles.CourseDetail} data-testid='CourseDetail'>
            <p className={styles.MainTitle}>{courseDetail?.title}</p>
            <div className={styles.CourseWrapper}>
                <div className={styles.Description}>
                    <p className={styles.Title}>Description:</p>
                    <p>{courseDetail?.description}</p>
                </div>
                <div className={styles.Divider}></div>
                <div className={styles.Info}>
                    <div className={styles.Space}></div>
                    <div className={styles.InfoItem}>
                        <p className={styles.InfoName}>ID:</p>
                        <p className={styles.InfoValue}>{courseDetail?.id}</p>
                    </div>
                    <div className={styles.InfoItem}>
                        <p className={styles.InfoName}>Duration:</p>
                        <p className={styles.DurationInfo}>{formatDuration(courseDetail?.duration)}</p>
                    </div><div className={styles.InfoItem}>
                        <p className={styles.InfoName}>Created:</p>
                        <p className={styles.InfoValue}>{courseDetail?.creationDate}</p>
                    </div><div className={styles.InfoItem}>
                        <p className={styles.InfoName}>Authors: </p>
                        <p className={styles.InfoValue}>{courseDetail?.authors}</p>
                    </div>
                </div>
            </div>
            <div className={styles.ButtonWrapper}>
                <Link to='/courses'>Back</Link>
            </div>
        </div>
    );
}
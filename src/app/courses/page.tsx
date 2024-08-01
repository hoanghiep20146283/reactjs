import styles from './styles.module.css'

interface CourseResponse {
    successful: boolean,
    result: Course,
}

type Course = {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
};

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const fetchData = async () => {
    const courseResponse = await fetch(`http://localhost:4000/courses/66cc289e-6de9-49b2-9ca7-8b4f409d6467`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    await delay(3000);
    const courseDetailResponse: CourseResponse = await courseResponse.json();
    return courseDetailResponse.result;
    // throw new Error();
}

export default async function Courses({ params }: { params: { name: string } }) {
    const courseDetail = await fetchData();
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
                        <p className={styles.DurationInfo}>{courseDetail?.duration}</p>
                    </div><div className={styles.InfoItem}>
                        <p className={styles.InfoName}>Created:</p>
                        <p className={styles.InfoValue}>{courseDetail?.creationDate}</p>
                    </div><div className={styles.InfoItem}>
                        <p className={styles.InfoName}>Authors: </p>
                        <p className={styles.InfoValue}>{courseDetail?.authors}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import H3 from "../assets/images/H3.png";
import styles from "../assets/scss/FunnyVideos.module.scss";
import SetTitle from "../components/SetTitle";

const FunnyVideos = () => {
	SetTitle("Funny Videos");

	const [title, setTitle] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [img, setImg] = useState(null);
	const inputRef = useRef(null);

	const handelSend = () => {
		console.log("Send");
	};

	return (
		<div className={styles.FunnyVideos}>
			<h1>Funny Videos</h1>

			<div className={styles.Container1}>
				{Array(21)
					.fill("")
					.map((data, index) => (
						<div className={styles.Wrapper} key={index}>
							<div className={styles.WrapperBox}>
								<img src="https://picsum.photos/200/300" alt="" />
							</div>
						</div>
					))}
			</div>

			<div className={styles.Container2}>
				<div className={styles.Top}>
					<p>Send your kid Video</p>
				</div>
				<div className={styles.Bottom}>
					<div className={styles.Left}>
						<div className={styles.Upload} onClick={() => inputRef.current.click()}>
							<FiUpload />
							<p>{img?.name ? img.name : "Select Files"}</p>
							<input
								type="file"
								ref={inputRef}
								style={{ display: "none" }}
								onChange={(e) => setImg(e.target.files[0])}
							/>
						</div>

						<div className={styles.InputContainer}>
							<label>Title Of video</label>
							<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
						</div>

						<div className={styles.InputContainer}>
							<label>Name</label>
							<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>

						<div className={styles.InputContainer}>
							<label>Email</label>
							<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
						</div>

						<button onClick={handelSend}>Send</button>
					</div>

					<div className={styles.Right}>
						<img src={H3} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FunnyVideos;

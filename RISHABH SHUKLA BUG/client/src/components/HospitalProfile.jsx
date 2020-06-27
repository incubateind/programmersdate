import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Paper, Icon } from "@material-ui/core";
import { Typography, TextField } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import Upvote from "@material-ui/icons/ArrowUpward";
import Downvote from "@material-ui/icons/ArrowDownward";
import BookAnAppointment from "./BookAnAppointemnt";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import HospitalInfo from "./HospitalInfo";

const commentData = [
  {
    name: "blurry",
    comment:
      "Cillum et fugiat aliquip consectetur aliqua magna amet esse. Sunt ea nostrud enim laboris irure.",
    date: "12-06-2020",
  },
  {
    name: "venom",
    comment:
      "Cillum et fugiat aliquip consectetur aliqua magna amet esse. Duis proident veniam aliquip mollit adipisicing officia.",
    date: "12-06-2020",
  },
  {
    name: "Light",
    comment:
      "Cillum et fugiat aliquip consectetur aliqua magna amet esse. Id quis nisi sit voluptate occaecat quis irure eu labore.",
    date: "12-06-2020",
  },
  {
    name: "veron",
    comment:
      "Cillum et fugiat aliquip consectetur aliqua magna amet esse. Sit minim ullamco deserunt in incididunt aute ipsum esse.",
    date: "12-06-2020",
  },
  {
    name: "hayabusa",
    comment:
      "Cillum et fugiat aliquip consectetur aliqua magna amet esse. Sint commodo nulla tempor laborum do pariatur elit reprehenderit ad Lorem aute anim excepteur.",
    date: "12-06-2020",
  },
  {
    name: "bugati",
    comment:
      "Cillum et fugiat aliquip consectetur aliqua magna amet esse. Esse ut anim eiusmod ex irure enim non officia anim.",
    date: "12-06-2020",
  },
  {
    name: "kallen",
    comment:
      "Cillum et fugiat aliquip consectetur aliqua magna amet esse. Ex irure consectetur minim aliqua.",
    date: "12-06-2020",
  },
  {
    name: "lelouch",
    comment:
      "Cillum et fugiat aliquip consectetur aliqua magna amet esse. Sunt sint aute dolor labore incididunt reprehenderit in exercitation.",
    date: "12-06-2020",
  },
  {
    name: "kissanime",
    comment:
      "Cillum et fugiat aliquip consectetur aliqua magna amet esse. Excepteur anim labore incididunt laboris ea officia nulla irure.",
    date: "12-06-2020",
  },
];

export default function LetterAvatars({ match }) {
  console.log(match.params.id);
  const [reviewComment, setReviewComment] = useState("");
  const [profileLoading, setProfileLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [commentData2, setCommentData] = useState(commentData);
  const randomNumberBetweenZeroAnd = (a) => {
    return Math.floor(Math.random() * a);
  };

  useEffect(() => {
    axios
      .get(`/api/hospital/profile/${match.params.id}`)
      .then((res) => {
        if (res.status !== 200) return;
        console.log(res.data);
        const profile = res.data;
        setProfile(profile);
        setTimeout(() => {
          console.log(profile);
          setProfileLoading(false);
        }, 1000);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="profile-page-wrapper">
      {profileLoading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <span style={{ marginRight: 15, fontSize: 18 }}>Loading profile...</span>{" "} */}
          <CircularProgress />
        </div>
      ) : (
        <Paper style={{ padding: 20 }}>
          <div className="profile-page-header">
            <Avatar
              style={{
                backgroundColor: "#5b9bd5",
                width: "55px",
                height: "55px",
              }}
            >
              {profile.data.name[0]}
            </Avatar>
            <Typography style={{ color: "#000000b5" }} variant="h5">
              {profile.data.name}
            </Typography>
          </div>
          <div className="profile-page-body">
            <div className="profile-page-body-subheading">
              {" "}
              <Typography variant="h6">About the Hospital</Typography>{" "}
              <Rating name="read-only" value={4} readOnly />
            </div>
            <Typography variant="subtitle1">
              {profile.data.description}
            </Typography>
            <div className="profile-btn">
              <BookAnAppointment />
              <HospitalInfo props={profile} />
            </div>
          </div>
        </Paper>
      )}
      {/* https://api.adorable.io/avatars/282/${v.name}.png */}
      {commentData2.map((v, i) => (
        <Paper
          key={i}
          style={{
            padding: "20px 3vw",
            marginTop: 60,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "3px 20px",
              borderRight: "0.5px solid #0000005e",
            }}
          >
            <Avatar
              style={{
                backgroundColor: "#5b9bd5",
                width: "55px",
                height: "55px",
              }}
              src={`https://api.adorable.io/avatars/282/${v.name}.png`}
            />
            <Typography variant="subtitle2">{v.name}</Typography>
            <Typography variant="subtitle2">{v.date}</Typography>
          </div>
          <div>
            <Typography
              style={{
                padding: "3px 10px",
              }}
              variant="subtitle1"
            >
              {v.comment}
            </Typography>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button>
                <Upvote />
                {randomNumberBetweenZeroAnd(20)}
              </Button>
              <Button>
                <Downvote />
                {randomNumberBetweenZeroAnd(10)}
              </Button>
            </div>
          </div>
        </Paper>
      ))}
      <Paper
        style={{
          padding: "20px 3vw",
          margin: "60px 0px",
        }}
      >
        <TextField
          id="outlined-number"
          label="Review"
          type="textarea"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          variant="outlined"
          value={reviewComment}
          onChange={(e) => setReviewComment(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Button
            color="#64b5f6"
            variant="contained"
            onClick={() => {
              commentData.unshift({
                name: "Blurry",
                comment: reviewComment,
                date: "27-06-2020",
              });
              setCommentData(commentData);
              setReviewComment("");
              window.scrollTo({
                top: 100,
                left: 100,
                behavior: "smooth",
              });
            }}
          >
            Review
          </Button>
        </div>
      </Paper>
    </div>
  );
}

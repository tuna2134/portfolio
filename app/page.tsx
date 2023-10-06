import { ImageOptimizerCache } from "next/dist/server/image-optimizer";
import styles from "./page.module.scss";
import Image from "next/image";

const IMAGE_SIZE = 120;

export default async function Home() {
  const languages = [
    {
      name: "Python",
      image: "python-logo-only.png",
    },
    {
      name: "TypeScript",
      image: "noimage.png",
    },
    {
      name: "JavaScript",
      image: "noimage.png",
    },
    {
      name: "Rust",
      image: "noimage.png",
    }
  ];
  const res = await fetch(
    "https://discord.com/api/v10/users/739702692393517076",
    {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
    },
  );
  const user = await res.json();
  const IMAGE_URL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?height=${IMAGE_SIZE}&width=${IMAGE_SIZE}`;
  return (
    <main>
      <div className={styles.main__one}>
        <div className={styles.main__one_children}>
          <div className={styles.main__one_children_content}>
            <div className={styles.main__one_children_img}>
              <Image
                alt="user.icon"
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                src={IMAGE_URL}
              ></Image>
            </div>
            <div>
              <h1>tuna2134</h1>
              <p>
                どうもtuna2134です。好きな時に好きなものを作るをモットーにしております。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main__two}>
        <div className={styles.main__two_content}>
          <div>
            <h2>Language</h2>
            <div className={styles.main__two_content_language}>
              {languages.map((language, index) => (
                <div key={index}>
                  <img
                    width={128}
                    height={128}
                    src=`/${language.image}`
                    alt="image"
                  ></img>
                  <p>{language.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

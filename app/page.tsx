import styles from "./page.module.scss";
import Image from "next/image";

const IMAGE_SIZE = 120;

export default async function Home() {
  const languages = ["Python", "TypeScript", "JavaScript", "Rust"];
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
              {languages.map((name, index) => (
                <div key={index}>
                  <Image
                    width={128}
                    height={128}
                    src="/noimage.png"
                    alt="ok"
                  ></Image>
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

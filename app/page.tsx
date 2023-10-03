import styles from './page.module.scss'

const IMAGE_SIZE = 120;

export default async function Home() {
  const res = await fetch("https://discord.com/api/v10/users/739702692393517076", {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
    },
  });
  const user = await res.json();
  return (
    <main>
      <div className={styles.main__one}>
        <div className={styles.main__one_children}>
          <div className={styles.main__one_children_content}>
            <div className={styles.main__one_children_img}>
              <img width={IMAGE_SIZE} height={IMAGE_SIZE} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}></img>
            </div>
            <div>
              <h1>tuna2134</h1>
              <p>どうもtuna2134です。好きな時に好きなものを作るをモットーにしております。</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

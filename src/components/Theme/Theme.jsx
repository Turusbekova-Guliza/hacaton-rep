import { useEffect, useState } from "react";
import "./Theme.css";

const Theme = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const nightThemeBtn = document.getElementById("night-theme-btn");

    nightThemeBtn.addEventListener("click", function () {
      document.body.classList.toggle("night-theme");

      const theme = localStorage.getItem("theme");

      if (theme === "night-theme") {
        localStorage.setItem("theme", "");
      } else {
        localStorage.setItem("theme", "night-theme");
      }
      setTheme(!theme);
    });
  }, []);

  return (
    <div className="theme">
      <button className="night-theme-btn" id="night-theme-btn">
        {theme ? (
          <svg
            className="night-theme-btn-icon  night-theme-btn-icon__sun"
            viewBox="0 0 64 64"
          >
            <g>
              <circle
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                cx="32.003"
                cy="32.005"
                r="16.001"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4
                  s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656
                  c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4
                  s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004
                  s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                d="M60.006,27.997l-4.009,0.008
                  c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4
                  C64.002,29.79,62.217,27.997,60.006,27.997z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657
                  c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4
                  c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004
                  c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653
                  L12.212,17.855z"
              />
            </g>
          </svg>
        ) : (
          <svg className="night-theme-btn-icon__moon" viewBox="0 0 24 24">
            <path
              d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z"
              fill="#292D32"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Theme;

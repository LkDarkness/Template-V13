const client = require("../index");


client.on('ready', () => {
    //feito por ned
            let activities = [
                'Precisa de ajuda? Utilize ky.help',
                'ky.help | Já pegou seu daily hoje? Use ky.daily',
                'ky.help | Verdade e mentira são o mesmo conceito',
                'ky.help | Minha música favorita é "Revolução" do Flash Beats',
                'ky.help | Im love you perfect girl!',
        
            ],
                i = 0; // 
            setInterval(
                () =>//feito por ned
                    client.user.setActivity(`${activities[i++ % activities.length]}`, {
                        type: "STREAMING",
                        url: "https://www.twitch.tv/darkness" // coloca o link da sua twitch aki ;-;
                    }),
                 1000 * 60
            );
            console.log(`[Sistema] - Aplicação conectada com sucesso ao projeto!`);
        });

import { ReactElement, useState } from 'react';
import { Grid, IconButton, Divider } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { QuoteCard, QuoteTypography, AuthorTypography, FooterBox } from "./styledComponents";

const QuoteGenerator = (): ReactElement => {
    const [quote, setQuote] = useState<iQuote>({
        quote: "The will of man is his happiness.",
        author: "Friedrich Schiller"
    });

    const fetchQuotes = async (): Promise<void> => {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            headers: { 'X-Api-Key': 'JFXSzwYJbqCM0IzVnvV9nw==JGfiHoxGAEzOjBdO'},
        });

        const quotes: [iQuote] = await response.json();

        setQuote(...quotes);
    }

    return (
        <Grid 
            container 
            width="100vw" 
            justifyContent="center"
        >
            <QuoteCard 
                item             
                xs={10} sm={8} lg={6}
                p="1.5vw"                
            >
                <QuoteTypography 
                    className="quote__text"
                >
                    {quote.quote}
                </QuoteTypography>
                <Divider 
                    className="quote__line" 
                />
                <FooterBox 
                    className="quote__info"
                >
                    <AuthorTypography 
                        className="quote__text"
                        noWrap
                    >
                        - {quote.author}
                    </AuthorTypography>
                    <IconButton onClick={fetchQuotes}>
                        <CachedIcon fontSize='large' color='primary'/>
                    </IconButton>
                </FooterBox>
            </QuoteCard>
        </Grid>
    )
}

export default QuoteGenerator;
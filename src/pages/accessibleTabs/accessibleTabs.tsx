import {Tab, Tabs} from '../../components';
import './accessibleTabs.css'

const AccessibleTabs: React.FunctionComponent = () => {
  return (
    <>
      <h1>Example of Tabs with Automatic Activation</h1>
      <p>
        This example section demonstrates a tabs widget that implements the <a
        href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel">design pattern
        for tabs</a>.
        In this example, a tab is automatically activated and its associated panel is displayed when the tab receives
        focus.
        Tabs should only be automatically activated in circumstances where panels can be displayed instantly, i.e., all
        panel content is present in the DOM.
        For additional guidance, see <a
        href="https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_selection_follows_focus">Deciding When
        to Make Selection
        Automatically Follow Focus</a>.
      </p>
      <section>
        <h2 id="ex_label_1">Example</h2>
        <div role="separator" id="ex_start_sep_1" aria-labelledby="ex_start_sep_1 ex_label_1" aria-label="Start of"/>

        <Tabs id="example_1" aria-label="Entertainment" defaultActiveTabKey="nills_1">

          <Tab tabKey="nills_1" title="Nils Frahm">
            <p>Nils Frahm is a German musician, composer and record producer based in Berlin. He is known for combining
              classical and electronic music and for an unconventional approach to the piano in which he mixes a grand
              piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.</p>
          </Tab>

          <Tab tabKey="agnes_1" title="Agnes Obel">
            <p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released
              by PIAS Recordings on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the
              Belgian Entertainment Association (BEA) for sales of 10,000 Copies.</p>
          </Tab>

          <Tab tabKey="freddie_1" title="Freddie Mercury">
            <p>Freddie Mercury was a British singer, songwriter, record producer, and lead vocalist of the rock band
              Queen. Regarded as one of the greatest singers in the history of rock music, he was known for his
              flamboyant stage persona and four-octave vocal range.</p>
          </Tab>

          <Tab tabKey="elvis_1" title="Elvis Presley">
            <p>Elvis Aaron Presley, also known simply as Elvis, was an American singer, musician and actor. He is
              regarded as one of the most significant cultural icons of the 20th century and is often referred to as the
              "King of Rock and Roll" or simply "the King".</p>
          </Tab>

          <Tab tabKey="disabled_1" title="Disabled" disabled={true}>
            <p>Disabled</p>
          </Tab>

        </Tabs>
        <div role="separator" id="ex_end_sep_1" aria-labelledby="ex_end_sep_1 ex_label_1" aria-label="End of"/>
      </section>

      <h1>Example of Tabs with Manual Activation</h1>
      <p>
        The below example section demonstrates a tabs widget that implements the <a
        href="https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel">tabs
        design pattern</a>.
        In this example, a new panel is displayed only after the user activates a tab with
        either <kbd aria-label="Space key">Space</kbd>, <kbd aria-label="Enter key">Enter</kbd>, or a mouse click.
        Typically, manual activation of tabs is only necessary when panels cannot be displayed instantly, i.e., not all
        the panel content is present in the DOM.
        For additional guidance, see <a
        href="https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_selection_follows_focus">Deciding When to Make Selection
        Automatically Follow Focus</a>.
      </p>
      <section>
        <h2 id="ex_label_2">Example</h2>
        <div role="separator" id="ex_start_sep_2" aria-labelledby="ex_start_sep_2 ex_label_2" aria-label="Start of"/>


        <Tabs id="example_2" automaticActivation={false} aria-label="Another entertainment" defaultActiveTabKey="nills_2">

          <Tab tabKey="nills_2" title="Nils Frahm">
            <p>Nils Frahm is a German musician, composer and record producer based in Berlin. He is known for combining
              classical and electronic music and for an unconventional approach to the piano in which he mixes a grand
              piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.</p>
          </Tab>

          <Tab tabKey="agnes_2" title="Agnes Obel">
            <p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released
              by PIAS Recordings on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the
              Belgian Entertainment Association (BEA) for sales of 10,000 Copies.</p>
          </Tab>

          <Tab tabKey="freddie_2" title="Freddie Mercury">
            <p>Freddie Mercury was a British singer, songwriter, record producer, and lead vocalist of the rock band
              Queen. Regarded as one of the greatest singers in the history of rock music, he was known for his
              flamboyant stage persona and four-octave vocal range.</p>
          </Tab>

          <Tab tabKey="elvis_2" title="Elvis Presley">
            <p>Elvis Aaron Presley, also known simply as Elvis, was an American singer, musician and actor. He is
              regarded as one of the most significant cultural icons of the 20th century and is often referred to as the
              "King of Rock and Roll" or simply "the King".</p>
          </Tab>

          <Tab tabKey="disabled_2" title="Disabled" disabled={true}>
            <p>Disabled</p>
          </Tab>

        </Tabs>


        <div role="separator" id="ex_end_sep_2" aria-labelledby="ex_end_sep_2 ex_label_2" aria-label="End of"/>
      </section>
    </>
  );
};

export default AccessibleTabs;

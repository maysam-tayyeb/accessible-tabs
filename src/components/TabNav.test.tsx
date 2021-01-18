import {Tab, TabNav} from '.';
import {act, screen, fireEvent, render} from "@testing-library/react";
import React from "react";
import {TabsContextProvider} from "../contexts/TabsContext";
import userEvent from "@testing-library/user-event";

describe('Tabs navigation bar', () => {
  describe("for Tabs", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <TabsContextProvider id="test_tabs" defaultActiveTabKey="test-tab-1">
            <TabNav aria-label="Test Tabs 1" automaticActivation={true}>
              <Tab tabKey="testTab2-1" title="Test Tab 1">Test Tab 1 Contents</Tab>
              <Tab tabKey="testTab2-2" title="Test Tab 2">Test Tab 2 Contents</Tab>
              <Tab tabKey="testTab2-3" title="Test Tab 3" disabled={true}>Test Tab 3 Contents</Tab>
            </TabNav>
          </TabsContextProvider>
        )
      })
    });

    it('displays tab titles', () => {
      expect(
        screen.getByText('Test Tab 1')
      ).toBeInTheDocument()
      expect(
        screen.getByText('Test Tab 2')
      ).toBeInTheDocument()
      expect(
        screen.getByText('Test Tab 3')
      ).toBeInTheDocument()
    })

    it('displays disabled tab navs', () => {
      expect(
        screen.getByText('Test Tab 1')
      ).toBeEnabled()
      expect(
        screen.getByText('Test Tab 2')
      ).toBeEnabled()
      expect(
        screen.getByText('Test Tab 3')
      ).toBeDisabled()
    });
  });

  describe("with automatically activated Tabs", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <TabsContextProvider id="test_automatically_activated_tabs" defaultActiveTabKey="testTab1">
            <TabNav aria-label="Test Tabs 1" automaticActivation={true}>
              <Tab tabKey="testTab1" title="Test Tab 1">Test Tab 1 Contents</Tab>
              <Tab tabKey="testTab2" title="Test Tab 2">Test Tab 2 Contents</Tab>
              <Tab tabKey="testTab3" title="Test Tab 3" disabled={true}>Test Tab 3 Contents</Tab>
            </TabNav>
          </TabsContextProvider>
        )
      })
    });

    it('activates tab by click', () => {
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).not.toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 1')

      act(() => {
        userEvent.click(screen.getByText('Test Tab 2'))
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 2')
    });

    it('activates next tab by pressing ArrowRight key', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 1'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 1')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'ArrowRight', code: 'ArrowRight'})
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 2')
    });

    it('activates first tab by pressing ArrowRight key when last was active', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 2'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 2')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'ArrowRight', code: 'ArrowRight'})
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 1')
    });

    it('activates next tab by pressing ArrowLeft key', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 2'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 2')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'ArrowLeft', code: 'ArrowLeft'})
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 1')
    });

    it('activates last tab by pressing ArrowLeft key when first was active', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 1'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 1')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'ArrowLeft', code: 'ArrowLeft'})
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 2')
    });

    it('activates first tab by pressing Home key', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 2'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 2')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'Home', code: 'Home'})
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 1');
    });

    it('activates last tab by pressing End key', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 1'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 1')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'End', code: 'End'})
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 2')
    });

    it('does nothing when any keys except Home, End and {Top,Right,Down,Left}Arrow pressed', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 1'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 1')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'a', code: 'aKey'});
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 1')
    });
  });

  describe("with manually activated Tabs", () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <TabsContextProvider id="test_manually_activated_tabs" defaultActiveTabKey="testTab1">
            <TabNav aria-label="Test Tabs 1" automaticActivation={false}>
              <Tab tabKey="testTab1" title="Test Tab 1">Test Tab 1 Contents</Tab>
              <Tab tabKey="testTab2" title="Test Tab 2">Test Tab 2 Contents</Tab>
              <Tab tabKey="testTab3" title="Test Tab 3" disabled={true}>Test Tab 3 Contents</Tab>
            </TabNav>
          </TabsContextProvider>
        )
      })
    });

    it('activates tab by click', () => {
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).not.toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 1')

      act(() => {
        userEvent.click(screen.getByText('Test Tab 2'))
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 2')
    });

    it('does not activate next tab by pressing ArrowRight key', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 1'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 1')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'ArrowRight', code: 'ArrowRight'})
      });
      expect((tabList.querySelector(':focus') as Element).innerHTML).toBe('Test Tab 2');
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).not.toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 1')
    });

    it('does not activate next tab by pressing ArrowLeft key', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 2'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 2')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'ArrowLeft', code: 'ArrowLeft'})
      });
      expect((tabList.querySelector(':focus') as Element).innerHTML).toBe('Test Tab 1');
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).not.toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 2')
    });

    it('does not activate first tab by pressing Home key', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 2'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 2')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'Home', code: 'Home'})
      });
      expect((tabList.querySelector(':focus') as Element).innerHTML).toBe('Test Tab 1');
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).not.toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 2');
    });

    it('does not activate last tab by pressing End key', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 1'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 1')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(screen.getByRole('tablist'), {key: 'End', code: 'End'})
      });
      expect((tabList.querySelector(':focus') as Element).innerHTML).toBe('Test Tab 2');
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).not.toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 1')
    });

    it('does nothing when any keys except Home, End and {Top,Right,Down,Left}Arrow pressed', () => {
      act(() => {
        userEvent.click(screen.getByText('Test Tab 1'))
      });
      let activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab.innerHTML).toBe('Test Tab 1')

      const tabList = screen.getByRole('tablist');
      act(() => {
        fireEvent.keyDown(tabList, {key: 'a', code: 'aKey'});
      });
      activeTab = screen.getByRole('tab', {selected: true})
      expect(activeTab).toHaveFocus()
      expect(activeTab.innerHTML).toBe('Test Tab 1')
    });
  });

  it("must be within TabsContextProvider", async () => {
    let error = {message: 'Before Running'}

    try {
      await act(async () => {
        render(
          <TabNav aria-label="Test Tabs 1" automaticActivation={false}>
            <Tab tabKey="testTab1" title="Test Tab 1">Test Tab 1 Contents</Tab>
            <Tab tabKey="testTab2" title="Test Tab 2">Test Tab 2 Contents</Tab>
            <Tab tabKey="testTab3" title="Test Tab 3" disabled={true}>Test Tab 3 Contents</Tab>
          </TabNav>
        )
      })
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('useTabsContext must be used within TabsContextProvider')

    return;
  });
});

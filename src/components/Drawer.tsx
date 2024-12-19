import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import { navItems } from "../constants/navItems";

type DrawerContentProps = {
  mobileOpen: boolean;
  toggleMobileOpen: () => void;
  scrollToSection: (section: string) => void;
};

export default function DrawerContent({
  mobileOpen,
  toggleMobileOpen,
  scrollToSection,
}: DrawerContentProps) {
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleMobileOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <Box
          className="navigation-bar-responsive"
          onClick={toggleMobileOpen}
          sx={{ textAlign: "center" }}
        >
          <p className="mobile-menu-top">
            <ListIcon />
            Menu
          </p>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item[0]} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={() => scrollToSection(item[1])}
                >
                  <ListItemText primary={item[0]} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}
